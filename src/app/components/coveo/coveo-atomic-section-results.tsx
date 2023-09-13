import { AtomicResultList, AtomicLayoutSection } from "@coveo/atomic-react";
import CoveoAtomicResultTemplate from "./coveo-atomic-result-template";

export default function CoveoAtomicSectionResults() {
  return (
    <>
      <AtomicLayoutSection section="results">
        <AtomicResultList template={CoveoAtomicResultTemplate} />
      </AtomicLayoutSection>
    </>
  );
}
