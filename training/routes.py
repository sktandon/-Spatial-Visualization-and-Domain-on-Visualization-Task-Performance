import flask
from flask import Blueprint
from flask import current_app as current_app

training_bp = Blueprint(
    "training_bp", __name__,
    template_folder='templates',
    static_folder='static'
)

# @training_bp.route("/game")
# def game():
#     return flask.render_template("game.html")

@training_bp.route("/instruction")
def instruction():
    return flask.render_template("instruction2.html")

@training_bp.route("/Train1/")
def Train1():
    return flask.render_template("Train1.html")

@training_bp.route("/trans/")
def trans():
    return flask.render_template("trans.html")