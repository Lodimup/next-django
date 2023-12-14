from typing import Literal
from ninja import ModelSchema, Schema, Field
from pydantic import field_validator
from appaccount.models.accounts import UserProfile


class UserProfileSchema(ModelSchema):
    class Meta:
        model = UserProfile
        exclude = ["id", "user"]


class MeGetOut(UserProfileSchema):
    username: str


class MePatchIn(ModelSchema):
    class Meta:
        model = UserProfile
        exclude = ["id", "user", "created", "updated"]
    
    @field_validator("gender", check_fields=False)
    def validate_gender(cls, v):
        allowed_genders = UserProfile.GENDER_CHOICES.keys()
        if v not in allowed_genders:
            raise ValueError(f'gender must be one of {", ".join(allowed_genders)}')
        return v


class MePatchOut(MeGetOut):
    ...