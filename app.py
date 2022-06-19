import flask, random, json, uuid, datetime
from flask import redirect, url_for, session, request, send_from_directory
from flask_mysqldb import MySQL


from training.routes import training_bp

# Create the application.
app = (flask.Flask(__name__, instance_relative_config=True))

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "your-database"

app.config["MYSQL_CURSORCLASS"] = "DictCursor"
mysql = MySQL(app)

app.secret_key="dev"
app.register_blueprint(training_bp, url_prefix='/tr')

#functions

#kicked out if invalid
def kick():
    session.pop("id", None)
    return redirect(url_for('home'))


def timestamptosql(timestamp): #taking in a timestamp in milliseconds 
   return datetime.datetime.fromtimestamp(float(timestamp)/1000).isoformat(sep=' ', timespec='milliseconds')

#def answeralert(): create alert for no answer
    


@app.route("/")
def landing():
        return flask.render_template("landing.html")

@app.route("/consent/")
def consent():
        return flask.render_template("consent.html")


@app.route("/dems/", methods = ['GET'])
def dems():
    session["id"]= str(uuid.uuid4())
    cursor = mysql.connection.cursor()
    query = 'INSERT INTO `demographics`(`ID`) VALUES (%s)'
    cursor.execute(query, (session.get("id"),))
    mysql.connection.commit()
    return flask.render_template("dems.html")


@app.route("/dems/", methods = ['POST']) 
def getDems():
         ## need to update dems database
         gender = request.form.get('gender')
         if gender not in ["Female", "Male", "Other", "Prefer Not to Answer"]:
             return kick()
         taken = request.form.get('taken') #dems.html name
         if taken not in ["No"]:
             return redirect(url_for('sorry'))
         computer = request.form.get('computer')
         if computer not in ["Laptop or Desktop Computer"]:
             return redirect(url_for('comeback'))
         agegroup = request.form.get('age')
         if agegroup not in ["18-25","26-31","32-41","42-57","58-67","68-75","76+"]:
            return kick()
         education = request.form.get('education')
         if education not in ["No schooling completed","Some school (below High School / A-levels)","High School / A-levels","Vocational/Technical School","Some University","University/Associate/Bachelors Degree","Masters or Professional Degree (MD, JD)","Doctoral Degree (PhD)"]:
            return kick()
         education_area = request.form.get('education-area')
         employment = request.form.get('employment')
         avenue = request.form.get('avenue')
         if avenue not in ["Research Crowdsourcing Platform","Through a directed email","Through King's College London","Online posting","Other"]:
            return kick()
         country1 = request.form.get('country1')
         country2 = request.form.get('country2')
         area = request.form.get('area')
         proID = request.form.get('proID')
         cursor = mysql.connection.cursor()
         query = 'UPDATE demographics SET gender = %s, taken = %s, computer = %s, agegroup=%s, education=%s, educationarea=%s, employment=%s, avenue=%s, country1=%s, country2=%s, area=%s, proID=%s WHERE ID = %s'
         cursor.execute(query, (gender, taken, computer, agegroup, education, education_area, employment, avenue, country1, country2, area, proID, session.get("id"),))
         mysql.connection.commit()
         return redirect(url_for('inst'))
        #return flask.render_template("dems.html")


@app.route("/comeback")
def comeback():
    session.pop("id", None)
    return flask.render_template("comeback.html")

@app.route("/sorry")
def sorry():
    session.pop("id", None)
    return flask.render_template("sorry.html")


@app.route("/Part2")
def Part2():
    return flask.render_template("stimuli.html")

#transition to paper folding game
    
@app.route("/transition")
def transition():
    return flask.render_template("transition.html")


@app.route("/inst")
def inst():
    return flask.render_template("instruction.html")


@app.route("/Qs")
def Qs():
    return flask.render_template("Qs.html")


#one last question


@app.route("/quest", methods = ['GET'])
def quest():
    return flask.render_template("quest.html")

@app.route("/quest", methods = ['POST'])
def getQuest():
    ## need to update dems database
    diff1 = request.form.get('diff1')
    if diff1 not in ["Easy", "Fairly Easy", "Neither", "Fairly Difficult", "Difficult"]:
        return kick()

    diff2 = request.form.get('diff2') 
    if diff2 not in ["Easy", "Fairly Easy", "Neither", "Fairly Difficult", "Difficult"]:
        return kick()
    
    intrinsic = request.form.get('intrinsic')
    if intrinsic not in ["0", "1", "2", "3", "4"]:
        return kick()
    
    extrinsic = request.form.get('extrinsic')
    if extrinsic not in ["0", "1", "2", "3", "4"]:
        return kick()
    
    selfeff = request.form.get('selfeff')
    if selfeff not in ["0", "1", "2", "3", "4"]:
        return kick()

    selfdet = request.form.get('selfdet')
    if selfdet not in ["0", "1", "2", "3", "4"]:
        return kick()

    anxiety = request.form.get('anxiety')
    if anxiety not in ["0", "1", "2", "3", "4"]:
        return kick()

    feedback = request.form.get('feedback')
    
    cursor = mysql.connection.cursor()
    query = 'UPDATE demographics SET DiffPt1=%s, DiffPt2=%s WHERE ID = %s'
    cursor.execute(query, (diff1, diff2, session.get("id"),))
    mysql.connection.commit()

    mquery = 'UPDATE demographics SET intrinsic=%s, extrinsic=%s, selfeff=%s, selfdet=%s, anxiety=%s WHERE ID = %s'
    cursor.execute(mquery, (intrinsic, extrinsic, selfeff, selfdet, anxiety, session.get("id"),))
    mysql.connection.commit()

    if feedback != "":
        bquery = 'INSERT INTO `feedback`(`response`) VALUES (%s)'
        cursor.execute(bquery, (feedback,))
        mysql.connection.commit()

#you can do a second query / cursor.execute / mysql.connection.commit to a separate table for feedback

    return redirect(url_for('end'))

        
def endhelper(showemail):
    return flask.render_template("end.html", showemail= showemail)



@app.route("/end", methods = ['GET'])
def end():
    return endhelper(True)
    #return flask.render_template("end.html")
    
@app.route("/end", methods = ['POST'])
def getEnd():
        ## update emails database 
        email = request.form.get('email')

        if(email != ""):
            cursor = mysql.connection.cursor()
            query = 'INSERT INTO `emails`(`email`) VALUES (%s)'
            cursor.execute(query, (email,))
            mysql.connection.commit()

            return endhelper(False)
        else:
            return endhelper(False)
        
        

#AJAX 

@app.route("/datafromtraining", methods = ['POST'])
def datafromtraining():
        ## get data from training
        qNumber = request.form.get('qNumber')   
        QNum = request.form.get('QNum')
        ResponseTime = request.form.get('ResponseTime')
        StartTime = request.form.get('StartTime')
        StartTime = timestamptosql(StartTime)
        EndTime = request.form.get('EndTime')
        EndTime = timestamptosql(EndTime)

        QuestionText = request.form.get('QuestionText')
        Type = request.form.get('Type')
        Density = request.form.get('Density')
        Level = request.form.get('Level')
        CorrectAnswer = request.form.get('CorrectAnswer')
        Response = request.form.get('Response')
        Correct = True if request.form.get('Correct')=='true' else False
        
        cursor = mysql.connection.cursor()
        query = "INSERT INTO `training`(`UserID`, `Question`, `QOrder`, `QNum`, `Chart`, `Density`, `Level`, `StartTime`, `EndTime`, `ResponseTime`, `Response`, `CorrectAnswer`, `Correct`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(query, (session.get("id"), QuestionText, int(qNumber), int(QNum), Type, Density, Level, StartTime, EndTime, ResponseTime, Response, CorrectAnswer, Correct,))
        mysql.connection.commit()
        return ''

@app.route("/datafromstimuli", methods = ['POST'])
def datafromstimuli():
        ## get data from training
        qNumber = request.form.get('qNumber')   
        QNum = request.form.get('QNum')
        ResponseTime = request.form.get('ResponseTime')
        StartTime = request.form.get('StartTime')
        StartTime = timestamptosql(StartTime)
        EndTime = request.form.get('EndTime')
        EndTime = timestamptosql(EndTime)

        QuestionText = request.form.get('QuestionText')
        Type = request.form.get('Type')
        Density = request.form.get('Density')
        Level = request.form.get('Level')
        CorrectAnswer = request.form.get('CorrectAnswer')
        Response = request.form.get('Response')
        Correct = True if request.form.get('Correct')=='true' else False
        
        cursor = mysql.connection.cursor()
        query = "INSERT INTO `stimuli`(`UserID`, `Question`, `QOrder`, `QNum`, `Chart`, `Density`, `Level`, `StartTime`, `EndTime`, `ResponseTime`, `Response`, `CorrectAnswer`, `Correct`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        cursor.execute(query, (session.get("id"), QuestionText, int(qNumber), int(QNum), Type, Density, Level, StartTime, EndTime, ResponseTime, Response, CorrectAnswer, Correct,))
        mysql.connection.commit()
        return ''


@app.route("/datafrompaper", methods = ['POST'])
def datafrompaper():
        ## get data from paper folding game
        qNumber = request.form.get('qNumber') 
        Answer = request.form.get('Answer')
        Time = request.form.get('Time')

        PaperStartTime = request.form.get('PaperStartTime')
        PaperStartTime = timestamptosql(PaperStartTime)
        PaperEndTime = request.form.get('PaperEndTime')
        PaperEndTime = timestamptosql(PaperEndTime)

        CorrectA = request.form.get('CorrectA')
        IsCorrect = True if request.form.get('IsCorrect')=='true' else False

        cursor = mysql.connection.cursor()
        query = 'INSERT INTO `paper`(`UserID`, `Question`, `Answer`, `Time`,`PaperStartTime`, `PaperEndTime`, `CorrectA`, `IsCorrect`) VALUES (%s, %s,%s,%s,%s,%s, %s,%s)'
        cursor.execute(query, (session.get("id"), qNumber, Answer, Time, PaperStartTime, PaperEndTime, CorrectA, IsCorrect,)) 
        mysql.connection.commit()
        return ''

#robots.txt information
@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory('static', request.path[1:])


if __name__ == '__main__':
    app.debug=True
    app.run()
