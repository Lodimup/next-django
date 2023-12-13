from ninja import Router
from appaccount.routes.auths import router as auths_router


router = Router(tags=["account"])
router.add_router("/auths", auths_router)
