from json import JSONEncoder
from .chess.figures.layout import figures

class MatrixSerializer(JSONEncoder):
    def default(self, figure):
        dict = figure.get_db_dict()
        return dict
        
class ClientMatrixSerializer(JSONEncoder):
    def default(self, figure):
        dict = figure.get_client_dict()
        return dict

def from_db_objects_to_classes_serializer(json_object):
    if "number" in json_object:
        figure = figures[json_object["number"] - 1](
            row=json_object["row"],
            column=json_object["column"],
            matrix=[[]],
            color=json_object["color"]
        )
        
        if "moves_count" in json_object:
            figure.moves_count = json_object["moves_count"]
            
        return figure