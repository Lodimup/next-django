from ninja import Router
from appdemo.routes.demos import router as demos_router


router = Router()
router.add_router("/demo", demos_router)
