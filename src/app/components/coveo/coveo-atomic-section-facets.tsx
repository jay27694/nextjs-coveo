import { AtomicFacet, AtomicLayoutSection } from "@coveo/atomic-react";
export default function CoveoAtomicSectionFacets() {
  return (
    <>
      <AtomicLayoutSection section="facets">
        <AtomicFacet
          facet-id="facet_sitename"
          field="rotary_sitename"
          label="site"
          with-search={false}
        ></AtomicFacet>
        <AtomicFacet
          facet-id="facet_contenttype"
          field="rotary_contenttype"
          label="content-type"
          with-search={false}
        ></AtomicFacet>
        <AtomicFacet
          facet-id="facet_filetype"
          field="rotary_filetype"
          label="file-type"
          with-search={false}
        ></AtomicFacet>
        <AtomicFacet
          facet-id="facet_language"
          field="rotary_language"
          label="language"
          with-search={false}
        ></AtomicFacet>
      </AtomicLayoutSection>
    </>
  );
}
