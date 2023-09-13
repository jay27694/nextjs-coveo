import {
  AtomicPager,
  AtomicLayoutSection,
  AtomicResultsPerPage,
} from "@coveo/atomic-react";

export default function CoveoAtomicSectionPagination() {
  return (
    <>
      <AtomicLayoutSection className="mt-10" section="pagination">
        <AtomicPager></AtomicPager>
        <AtomicResultsPerPage></AtomicResultsPerPage>
      </AtomicLayoutSection>
    </>
  );
}
