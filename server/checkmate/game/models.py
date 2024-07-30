from django.db.models import (
    Model,
    DateTimeField,
    CharField,
    TextField,
    IntegerField,
    TextChoices,
    ManyToManyField,
    OneToOneField,
    CASCADE
)
from users.models import User
from .chess.modes.classic import CLASSIC as CLASSIC_MODE
from django.core.exceptions import ValidationError
from django.db.models.signals import m2m_changed

class Game(Model):
    class Mode(TextChoices):
        CLASSIC = (CLASSIC_MODE["name"], CLASSIC_MODE["display_name"])

    players = ManyToManyField(User, related_name="game", verbose_name="Players")
    
    # player_1 = OneToOneField(User, on_delete=CASCADE, related_name="game", verbose_name="Player 1")
    # player_2 = OneToOneField(User, on_delete=CASCADE, related_name="game", verbose_name="Player 2")
    
    moves_count = IntegerField(default=0, verbose_name="Moves Count")
    created_date = DateTimeField(auto_now_add=True, verbose_name="Created at")
    mode = CharField(max_length=50, choices=Mode, default=Mode.CLASSIC, verbose_name="Mode")
    moves = TextField(blank=True, null=True, verbose_name="Moves")
    matrix = TextField(blank=True, null=True, verbose_name="Matrix")
     
        
    class Meta:
        verbose_name = "Game"
        verbose_name_plural = "Games"
        
        
        
def players_changed(sender, **kwargs):
    if kwargs['instance'].players.count() > 2:
        raise ValidationError("You can't assign more than two players")


m2m_changed.connect(players_changed, sender=Game.players.through)


class Lobby(Model):
    player = OneToOneField(User, on_delete=CASCADE, verbose_name="Player", related_name="lobby")
    created_date = DateTimeField(auto_now_add=True, verbose_name="Searching since")
    mode = CharField(max_length=50, choices=Game.Mode, default=Game.Mode.CLASSIC, verbose_name="Mode")

    
    class Meta:
        verbose_name = "lobby"
        verbose_name_plural = "lobbies"
