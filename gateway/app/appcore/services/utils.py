from base64 import urlsafe_b64decode, urlsafe_b64encode
from uuid import UUID
from uuid import uuid4


def uuid2slug(uuidstring: str | UUID) -> str:
    """
    Convert a UUID to a slug.
    """
    return urlsafe_b64encode(UUID(str(uuidstring)).bytes).rstrip(b"=").decode("ascii")


def slug2uuid(slug: str) -> str:
    """
    Convert a slug to a UUID string.
    """
    return str(UUID(bytes=urlsafe_b64decode(str(slug) + "==")))


def slugify(s: str | UUID, decode: bool = False) -> str:
    """encode uuid to slug or decode slug to uuid

    Args:
        s (str): string to slugify / deslugify
        decode (bool, optional): to decode or encode. Defaults to False.

    Returns:
        str: slugified / deslugified string
    """
    if decode:
        return slug2uuid(s)  # type: ignore

    return uuid2slug(s)


def generate_fp(filename: str, base_path: str):
    """generate slugified filename

    Args:
        filename (str): filename
        base (str): base path ex. cdn/images/.../
    """
    extension = filename.split(".")[-1]
    filename = slugify(str(uuid4())).replace("_", "")

    return f"{base_path}/{filename}.{extension}"
