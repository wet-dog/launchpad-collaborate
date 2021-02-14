import os
import time
from flask import Flask, g, session, redirect, request, url_for, abort, jsonify


app = Flask(__name__, static_url_path="", static_folder="build")


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")


if __name__ == "__main__":
    app.run()
