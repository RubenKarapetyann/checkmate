from django.db.models import (
    IntegerField, 
    FloatField, 
    ManyToManyField, 
    ImageField, 
    ForeignKey, 
    SET_NULL
)
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator

class User(AbstractUser):
    level = IntegerField(verbose_name="Level", blank=True, default=1)
    experience = FloatField(verbose_name="Experience", blank=True, default=0)
    coins = IntegerField(verbose_name="Coins", blank=True, default=100, validators=[
        MinValueValidator(0)
    ])
    money = IntegerField(verbose_name="Money", blank=True, default=0, validators=[
        MinValueValidator(0)
    ])
    friends = ManyToManyField("User", verbose_name="Friends", blank=True, related_name="user")
    image = ImageField(verbose_name="Avatar", null=True, blank=True, upload_to="users/%Y/%m/%d/")
    rating = IntegerField(verbose_name="Rating", blank=True, default=0, validators=[
        MinValueValidator(0)
    ])
    game = ForeignKey("game.Game", related_name="players", verbose_name="Game", on_delete=SET_NULL, null=True, blank=True)