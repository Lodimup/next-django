from ninja import Form, Router, UploadedFile

from appdemo.serializers.demos import SvActFormFileDemoPostIn


router = Router(tags=["demos"])


@router.post(
    "/form-action-upload/",
    response={204: None},
)
def post_form_action_upload(
    request,
    payload: Form[SvActFormFileDemoPostIn],
    file: UploadedFile = None,
):
    """
    Demo for uploading file using multipart/form-data.
    See: http://localhost:3000/demo/form-action-upload
    """
    print(payload.name)
    print(type(file), file)
    return 204, None
