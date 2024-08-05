def action_creater(action, data):
    return {
        "action" : action,
        "data" : data
    }

def type_creater(type, data):
    return {
        "type" : type,
        "data" : data
    }

def group_name_creater(type, id):
    return type + "_" + str(id)