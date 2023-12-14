from ninja import Router
from appaccount.routes.auths import router as auths_router
from appaccount.routes.users import router as users_router
from appaccount.services.auths import BearerTokenAuth


router = Router()
router.add_router("/auths", auths_router)
router.add_router("/users", users_router, auth=BearerTokenAuth())
