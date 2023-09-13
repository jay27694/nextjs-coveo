import {
  buildSearchEngine,
  getOrganizationEndpoints,
  buildSearchStatus,
  loadFacetSetActions,
  loadAdvancedSearchQueryActions,
} from "@coveo/atomic-react";
import { useEffect } from "react";

const coveoAPIToken = process.env.NEXT_PUBLIC_COVEO_API_TOKEN as string; //"xxf165f399-d326-46cd-a823-477782e898bf";
const coveoOrgId = process.env.NEXT_PUBLIC_COVEO_ORGID as string; // "rotarytrialneloodqq";
const coveoSearchHub = process.env.NEXT_PUBLIC_COVEO_SEARCHHUB as string; //"MyRotary-and-Rotary.org";
const coveoPipeline = process.env.NEXT_PUBLIC_COVEO_PIPELINE as string; //"MyRotary-and-Rotary.org";

export default function useCoveo() {
  const engine = buildSearchEngine({
    configuration: {
      organizationId: coveoOrgId,
      accessToken: coveoAPIToken,
      organizationEndpoints: getOrganizationEndpoints(coveoOrgId),
      analytics: { enabled: true },
      search: {
        pipeline: coveoPipeline,
        searchHub: coveoSearchHub,
      },
    },
  });

  // const actionPreSelectLanguage = loadFacetSetActions(
  //   engine
  // ).toggleSelectFacetValue({
  //   facetId: "facet_language",
  //   selection: {
  //     value: "English",
  //     state: "selected",
  //     numberOfResults: 10,
  //   },
  // });
  // engine.dispatch(actionPreSelectLanguage);

  // const setConstantQuery = loadAdvancedSearchQueryActions(
  //   engine
  // ).registerAdvancedSearchQueries({
  //   cq: "@rotary_filetype==SpreadSheet",
  // });
  // engine.dispatch(setConstantQuery);

  return engine;
}
