from json import JSONEncoder

class MatrixSerializer(JSONEncoder):
    def default(self, figure):
        dict = figure.__dict__
        return {
            "id" : dict["id"],
            "image" : dict["image"],
            "color" : dict["color"],
            "number" : dict["number"]
        }