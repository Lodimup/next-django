from ninja import ModelSchema, Field
from pydantic import field_validator
from appaccount.models.accounts import UserProfile, User


class UserProfileSchema(ModelSchema):
    class Meta:
        model = UserProfile
        exclude = ["id", "user"]


class MeGetOut(UserProfileSchema):
    username: str


class MePatchIn(ModelSchema):
    username: str = Field(None, min_length=3, max_length=150)

    class Meta:
        model = UserProfile
        exclude = ["id", "user", "created", "updated"]

    @field_validator("gender", check_fields=False)
    def validate_gender(cls, v):
        allowed_genders = UserProfile.GENDER_CHOICES.keys()
        if v not in allowed_genders:
            raise ValueError(f'gender must be one of {", ".join(allowed_genders)}')
        return v

    @field_validator("username")
    def validate_username(cls, v):
        if User.objects.filter(username=v).exists():
            raise ValueError("username already exists")
        return v


class MePatchOut(MeGetOut):
    ...
