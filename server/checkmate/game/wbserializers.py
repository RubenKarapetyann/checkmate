from json import JSONEncoder
from .chess.figures.layout import figures

class MatrixSerializer(JSONEncoder):
    def default(self, figure):
        dict = figure.__dict__
        return {
            "id" : dict["id"],
            "color" : dict["color"],
            "number" : dict["number"],
            "row" : dict["row"],
            "column" : dict["column"]
        }
        
class ClientMatrixSerializer(JSONEncoder):
    def default(self, figure):
        dict = figure.__dict__ 
        return {
            "image" : dict["image"],
            "id" : dict["id"],
            "color" : dict["color"],
            "number" : dict["number"]
        }

def from_db_objects_to_classes_serializer(json_object):
    if "number" in json_object:
        return figures[json_object["number"] - 1](
            row=json_object["row"],
            column=json_object["column"],
            matrix=[[]],
            color=json_object["color"]
        )