"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("api/dist/core/index.js"));
const oas_1 = __importDefault(require("oas"));
const openapi_json_1 = __importDefault(require("./openapi.json"));
class SDK {
    spec;
    core;
    constructor() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new index_js_1.default(this.spec, 'fsq-developers-places/20250617 (api/6.1.3)');
    }
    config(config) {
        this.core.setConfig(config);
    }
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    autocomplete(metadata) {
        return this.core.fetch('/autocomplete', 'get', metadata);
    }
    placeSearch(metadata) {
        return this.core.fetch('/places/search', 'get', metadata);
    }
    placeDetails(metadata) {
        return this.core.fetch('/places/{fsq_place_id}', 'get', metadata);
    }
    placeTips(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/tips', 'get', metadata);
    }
    placePhotos(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/photos', 'get', metadata);
    }
    suggestMerge(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/suggest/merge', 'post', metadata);
    }
    placeSuggestEdit(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/suggest/edit', 'post', metadata);
    }
    placeSuggestRemove(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/suggest/remove', 'post', metadata);
    }
    placeFlag(metadata) {
        return this.core.fetch('/places/{fsq_place_id}/suggest/flag', 'post', metadata);
    }
    placesSuggestPlace(metadata) {
        return this.core.fetch('/places/suggest/place', 'post', metadata);
    }
    placeSuggestStatus(metadata) {
        return this.core.fetch('/places/suggest/status', 'get', metadata);
    }
    placeTopVenueWoes(metadata) {
        return this.core.fetch('/places/suggest/review', 'get', metadata);
    }
    geotaggingCandidates(metadata) {
        return this.core.fetch('/geotagging/candidates', 'get', metadata);
    }
    geotaggingConfirm(metadata) {
        return this.core.fetch('/geotagging/confirm', 'post', metadata);
    }
    offlineJobsStatus(metadata) {
        return this.core.fetch('/offline-jobs/status', 'get', metadata);
    }
    offlineJobsExecute(metadata) {
        return this.core.fetch('/offline-jobs/{fsq_job_id}/execute', 'post', metadata);
    }
    offlineJobsInitialize(metadata) {
        return this.core.fetch('/offline-jobs/initialize', 'post', metadata);
    }
    offlineJobsCredentialsRefresh(metadata) {
        return this.core.fetch('/offline-jobs/{fsq_job_id}/credentials/refresh', 'post', metadata);
    }
}
const createSDK = (() => {
    return new SDK();
})();
exports.default = createSDK;
//# sourceMappingURL=index.js.map