import flask

import argparse

app = flask.Flask(__name__, static_folder="docs")

@app.route("/")
def index():
	return app.send_static_file("index.html")

@app.route("/<path>")
def getstatic(path):
	return app.send_static_file(path)

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	default_port = 5612
	parser.add_argument("-p", "--port",
		help=f"port number. defaults to {default_port}.",
		default=default_port
	)
	args = parser.parse_args()

	app.run(port=args.port, debug=True)