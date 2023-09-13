import {
  Result,
  AtomicResultSectionTitle,
  AtomicResultText,
  AtomicResultSectionExcerpt,
  AtomicResultLink,
  AtomicResultDate,
  AtomicResultFieldsList,
  AtomicText,
  AtomicResultSectionTitleMetadata,
  AtomicResultSectionBottomMetadata,
  AtomicResultBadge,
  AtomicResultImage,
  AtomicResultSectionVisual,
  AtomicResultIcon,
  AtomicResultSectionBadges,
} from "@coveo/atomic-react";
import Image from "next/image";

const CoveoAtomicResultTemplate = (result: Result) => {
  const style = () => ({
    __html: `
    atomic-result-section-badges {
      margin-left: 15px;
    }
      atomic-result-badge{
        background-color: #ddd;
        border: none;
        color: black;        
        text-align: center;
        text-decoration: none;
        display: inline-block;        
        border-radius: 16px;
      }
      atomic-result-link{
        color: rgb(59 130 246);
      }
      atomic-result-fields-list div {
        margin-right: 10px;
      }
      .metadata-label {
        margin-right: 5px;
        font-weight: 600;
      }
      atomic-result-section-excerpt {
        margin-top: 1rem !important;
        max-height: fit-content !important;
      }
      .featured-label {
        margin: auto;
      }
      .login-message{
        margin-left: auto;
      }
    `,
  });

  return (
    <>
      <style dangerouslySetInnerHTML={style()} />
      <AtomicResultSectionVisual image-size="icon">
        {result.raw.thumbnailurl !== undefined && (
          <AtomicResultIcon class="icon"></AtomicResultIcon>
        )}
        {result.raw.thumbnailurl !== undefined && (
          <AtomicResultImage field="thumbnailurl"></AtomicResultImage>
        )}
      </AtomicResultSectionVisual>
      <AtomicResultSectionBadges>
        <AtomicResultBadge
          class="badge-rotary_sitename"
          field="rotary_sitename"
        ></AtomicResultBadge>
        {result.isTopResult == true && (
          <div className="featured-label">
            <Image src="/flag.svg" alt="flag" height={20} width={20} />
          </div>
        )}
      </AtomicResultSectionBadges>
      <AtomicResultSectionTitle>
        <AtomicResultLink>
          <a slot="attributes" target="self"></a>
        </AtomicResultLink>
      </AtomicResultSectionTitle>
      <AtomicResultSectionTitleMetadata></AtomicResultSectionTitleMetadata>
      <AtomicResultSectionExcerpt>
        <AtomicResultText field="excerpt"></AtomicResultText>
      </AtomicResultSectionExcerpt>
      <AtomicResultSectionBottomMetadata>
        <AtomicResultFieldsList>
          {result.raw.rotary_modifieddate !== undefined && (
            <div>
              <span className="metadata-label">
                <AtomicText value="Updated"></AtomicText>:
              </span>
              <AtomicResultDate
                field="rotary_modifieddate"
                format="MM/DD/YYYY"
              ></AtomicResultDate>
            </div>
          )}

          {result.raw.rotary_sitehost !== undefined && (
            <div>
              <span className="metadata-label">
                <AtomicText value="Site"></AtomicText>:
              </span>
              <AtomicResultText field="rotary_sitehost"></AtomicResultText>
            </div>
          )}

          {result.raw.rotary_document_filesize !== undefined && (
            <div>
              <span className="metadata-label">
                <AtomicText value="Size"></AtomicText>:
              </span>
              <AtomicResultText field="rotary_document_filesize"></AtomicResultText>
            </div>
          )}

          {result.raw.rotary_showloginmessage !== undefined && (
            <div className="login-message">
              <AtomicResultText
                className="warning-message"
                field="rotary_showloginmessage"
              ></AtomicResultText>
            </div>
          )}
        </AtomicResultFieldsList>
      </AtomicResultSectionBottomMetadata>
    </>
  );
};

export default CoveoAtomicResultTemplate;
