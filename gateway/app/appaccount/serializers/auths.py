from ninja import Schema
from pydantic import EmailStr


class LoginPostIn(Schema):
    email: EmailStr


class LoginPostOut(Schema):
    access_token: str
    expires_in: int
    refresh_token: str
    refresh_token_expires_in: int


class RefreshPostIn(Schema):
    refresh_token: str


class RefreshPostOut(Schema):
    access_token: str
    expires_in: int
    refresh_token: str
