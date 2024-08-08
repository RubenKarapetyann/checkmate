from django.db.models import (
    Model,
    DateTimeField,
    CharField,
    TextField,
    IntegerField,
    TextChoices,
    OneToOneField,
    CASCADE
)
from users.models import User
from .chess.modes.classic import CLASSIC as CLASSIC_MODE

class Game(Model):
    class Mode(TextChoices):
        CLASSIC = (CLASSIC_MODE["name"], CLASSIC_MODE["display_name"])
        
 
    moves_count = IntegerField(default=0, verbose_name="Moves Count")
    created_date = DateTimeField(auto_now_add=True, verbose_name="Created at")
    mode = CharField(max_length=50, choices=Mode, default=Mode.CLASSIC, verbose_name="Mode")
    moves = TextField(blank=True, null=True, verbose_name="Moves")
    matrix = TextField(blank=True, null=True, verbose_name="Matrix")
    white_id = IntegerField(verbose_name="White Player ID")
    black_id = IntegerField(verbose_name="Black Player ID")
     
        
    class Meta:
        verbose_name = "Game"
        verbose_name_plural = "Games"
        
        

class Lobby(Model):
    player = OneToOneField(User, on_delete=CASCADE, verbose_name="Player", related_name="lobby")
    created_date = DateTimeField(auto_now_add=True, verbose_name="Searching since")
    mode = CharField(max_length=50, choices=Game.Mode, default=Game.Mode.CLASSIC, verbose_name="Mode")

    
    class Meta:
        verbose_name = "lobby"
        verbose_name_plural = "lobbies"
