from .utils import userIsAuthenticated

class SocketLoginRequiredMixin:
    def dispatch(self, *args, **kwargs):
        if not userIsAuthenticated(self.scope["user"]):
            return self.close(code=4000)
        return super().dispatch(*args, **kwargs)