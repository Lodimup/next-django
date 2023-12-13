import secrets


def gen_token(nbytes=64) -> str:
    """This is a function to generate a token.

    Args:
        lenth (int, optional): token length. Defaults to 64.

    Returns:
        str: token
    """
    return secrets.token_urlsafe(nbytes)
