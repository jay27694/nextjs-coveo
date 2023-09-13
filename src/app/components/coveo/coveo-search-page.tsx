"use client";
import {
  AtomicSearchInterface,
  AtomicSearchLayout,
  AtomicLayoutSection,
  AtomicSearchBox,
} from "@coveo/atomic-react";
import fieldsToInclude from "./coveo-atomic-fields";
import CoveoAtomicSectionStatus from "./coveo-atomic-section-status";
import CoveoAtomicSectionFacets from "./coveo-atomic-section-facets";
import CoveoAtomicSectionResults from "./coveo-atomic-section-results";
import CoveoAtomicSectionPagination from "./coveo-atomic-section-pagination";
import CoveoAtomicLocalization from "./coveo-atomic-localization";
import "./coveo.css";
import useCoveo from "./coveo-atomic-engine";

export default function CoveoAtomicSearchInterface() {
  const lang = "en";
  const engine = useCoveo();

  return (
    <>
      <AtomicSearchInterface
        engine={engine}
        fieldsToInclude={fieldsToInclude}
        language={lang}
        localization={CoveoAtomicLocalization}
      >
        <AtomicSearchLayout>
          <AtomicLayoutSection section="search">
            <AtomicSearchBox></AtomicSearchBox>
          </AtomicLayoutSection>

          <CoveoAtomicSectionFacets></CoveoAtomicSectionFacets>

          <AtomicLayoutSection className="p-5" section="main">
            <CoveoAtomicSectionStatus></CoveoAtomicSectionStatus>
            <CoveoAtomicSectionResults></CoveoAtomicSectionResults>
            <CoveoAtomicSectionPagination></CoveoAtomicSectionPagination>
          </AtomicLayoutSection>
        </AtomicSearchLayout>
      </AtomicSearchInterface>
    </>
  );
}
