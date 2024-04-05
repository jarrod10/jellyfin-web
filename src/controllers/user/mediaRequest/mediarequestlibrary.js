class MediaRequestLibrary {
    getMediaRequestHTML() {
        return `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Media Request Library</h1>
                    <p>Here you can view all the media requests that have been made by users.</p>
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Request ID</th>
                                    <th>Request Type</th>
                                    <th>Request Title</th>
                                    <th>Request Description</th>
                                    <th>Request Date</th>
                                    <th>Request Status</th>
                                    <th>Request User</th>
                                    <th>Request User Email</th>
                                    <th>Request User Phone</th>
                                </tr>
                            </thead>
                            <tbody id="mediaRequestTable">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

export default MediaRequestLibrary;
