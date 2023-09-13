import {
  AtomicBreadbox,
  AtomicQuerySummary,
  AtomicRefineToggle,
  AtomicDidYouMean,
  AtomicNotifications,
  AtomicSortDropdown,
  AtomicSortExpression,
  AtomicLayoutSection,
} from "@coveo/atomic-react";

export default function CoveoAtomicSectionStatus() {
  return (
    <>
      <AtomicLayoutSection className="pl-3" section="status">
        <AtomicBreadbox></AtomicBreadbox>
        <AtomicQuerySummary></AtomicQuerySummary>
        <AtomicRefineToggle></AtomicRefineToggle>
        <AtomicDidYouMean></AtomicDidYouMean>
        <AtomicNotifications></AtomicNotifications>
        <AtomicSortDropdown>
          <AtomicSortExpression
            label="relevance"
            expression="relevancy"
          ></AtomicSortExpression>
          <AtomicSortExpression
            label="last-modified"
            expression="rotary_modifieddate descending"
          ></AtomicSortExpression>
        </AtomicSortDropdown>
      </AtomicLayoutSection>
    </>
  );
}
