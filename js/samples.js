const workSampleHtml = row => `
        <div class="work-sample">
            <a target="_blank" class="work-sample-link" href="${row["url"]}">
                <div class="work-sample-header">
                    <img src="${row["img"]}"
                        class="wp-image-546 work-sample-img">
                    <div class="work-sample-text">
                        <h2 class="work-sample-hed">
                            ${row["hed"]}
                        </h2>
                        <p class="work-sample-date">${row["date"]}</p>
                        <p class="work-sample-dek"><span class="work-sample-type ${row["type"].toLowerCase()}">${row["type"]}</span> - ${row["dek"]}</p>
                    </div>
                </div>
            </a>
        </div>`;
