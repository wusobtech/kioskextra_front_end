export default class PaginationMetaModel {
    current_page = "";
    constructor(data) {
        this.current_page = data.current_page;
        this.first_page_url = data.first_page_url;
        this.from = data.from;
        this.last_page = data.last_page;
        this.last_page_url = data.last_page_url;
        this.next_page_url = data.next_page_url;
        this.path = data.path;
        this.per_page = data.per_page;
        this.prev_page_url = data.prev_page_url;
        this.to = data.to;
        this.total = data.total;
        this.can_load_more = data.can_load_more;
    }

    fromJson() {
        return this;
    }

}
