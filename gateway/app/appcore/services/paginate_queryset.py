import math
from typing import Any

from django.db.models.query import QuerySet
from ninja import Schema
from ninja.pagination import PageNumberPagination


class PageNumberPaginationExt(PageNumberPagination):
    """Custom pagination cls for ninja with added
    - total_page field
    """

    class Output(Schema):
        count: int
        total_page: int
        items: list[Any]

    def paginate_queryset(
        self,
        queryset: QuerySet,
        pagination: PageNumberPagination.Input,
        **params: Any,
    ) -> Any:
        offset = (pagination.page - 1) * self.page_size
        ret = {
            "items": queryset[offset: offset + self.page_size],
            "count": self._items_count(queryset),
            "total_page": math.ceil(self._items_count(queryset) / self.page_size),
        }
        return ret