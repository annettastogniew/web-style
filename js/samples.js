const workSampleHtml = row => `
        <div class="work-sample">
            <a target="_blank" class="work-sample-link" href="${row["url"]}">
                <div class="work-sample-header">
                    <img src="${row["img"].substring(0,4) === "http" ? row["img"] : `images/${row["img"]}`}"
                        class="wp-image-546 work-sample-img"
                        alt="${row["img_alt"]}">
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

const buildConfig = () => {
	return {
		delimiter: "",	// auto-detect
		newline: "",	// auto-detect
		quoteChar: '"',
		escapeChar: '"',
		header: false,
		transformHeader: undefined,
		dynamicTyping: false,
		preview: 0,
		encoding: "",
		worker: false,
		comments: false,
		step: undefined,
		complete: undefined,
		error: undefined,
		download: false,
		downloadRequestHeaders: undefined,
		downloadRequestBody: undefined,
		skipEmptyLines: false,
		chunk: undefined,
		chunkSize: undefined,
		fastMode: undefined,
		beforeFirstChunk: undefined,
		withCredentials: undefined,
		transform: undefined,
		delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
	};
};

const parseData = data => {
    const container = $(`#work-samples-container`);
    const workSamples = data.map(row => workSampleHtml(row)).join("");
    container.html(workSamples);
};

const init = dataUrl => {
    const config = buildConfig();

    Papa.parse(dataUrl, {
		download: true,
		header: true,
		config,
		complete: function (results) {
			// parse data from sheet
			parseData(results.data);
		}
	});

};

$(document).ready(function () {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPCaunpUX2z8BXCqolIJWsNZfhN8pt00lLVpV1fkJN5ktkqGoscPTLUnLVVSVga8V3y75ZNQohtTtV/pub?gid=0&single=true&output=csv";
	init(url);
});