import json
from game.wbserializers import ClientMatrixSerializer

def receiveParser(text_data):
    json_data = json.loads(text_data)
    action = json_data["action"]
    data = json_data["data"]
    
    return [action, data]

def sendParser(action, data, cls=ClientMatrixSerializer):
    json_data = { "action" : action, "data" : data }
    text_data = json.dumps(json_data, cls=cls)
    
    return text_data