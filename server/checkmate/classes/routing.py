class Constant():
    def __init__(self, path):
        self.path = path


class MainConstant(Constant):
    def __init__(self, path, url, namespace):
        super().__init__(path)
        self.url = url
        self.namespace = namespace
        
        
class AppConstant(Constant):
    def __init__(self, path, view, name):
        super().__init__(path)
        self.view = view
        self.name = name
