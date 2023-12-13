from typing import Literal

from ninja.security import HttpBearer

from appcore.services.env_manager import ENVS


class ServiceBearerTokenAuth(HttpBearer):
    """Used to authenticate NextJS's server side calls"""

    async def authenticate(self, request, token) -> Literal[True] | None:
        """This is a function to authenticate using token.
        Args:
            request (Request): request object
            token (str): token

        Returns:
            Session | None: session object if authenticated, None otherwise
        """
        if token == ENVS["SERVICE_TOKEN"]:
            return True

        return None
