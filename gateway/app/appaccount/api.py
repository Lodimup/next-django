from ninja import Router
from appaccount.routes.auths import router as auths_router


router = Router()
router.add_router("/auths", auths_router)
