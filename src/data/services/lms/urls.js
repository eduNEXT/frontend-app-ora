import { useParams } from 'react-router-dom';

import { StrictDict } from '@edx/react-unit-test-utils';
import { getConfig } from '@edx/frontend-platform';

import { stepRoutes, stepNames } from 'constants';

const useBaseUrl = () => {
  const { xblockId, courseId } = useParams();
  return `${getConfig().LMS_BASE_URL}/courses/${courseId}/xblock/${xblockId}/handler`;
};

export const useSaveDraftUrl = () => `${useBaseUrl()}/submission/draft`;
export const useSubmitUrl = () => `${useBaseUrl()}/submission/submit`;
export const useSubmitAssessmentUrl = () => `${useBaseUrl()}/assessment/submit`;
export const useORAConfigUrl = () => `${useBaseUrl()}/get_block_info`;

export const useViewUrl = () => {
  const { xblockId, courseId } = useParams();
  return ({ view }) => `${getConfig().BASE_URL}/${stepRoutes[view]}/${courseId}/${xblockId}`;
};

export const usePageDataUrl = () => {
  const baseUrl = useBaseUrl();
  return (step) => (step
    ? `${baseUrl}/get_learner_data/${step}`
    : `${baseUrl}/get_learner_data/`);
};

export default StrictDict({
  useORAConfigUrl,
  usePageDataUrl,
});
