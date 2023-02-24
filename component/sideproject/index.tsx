import { PropsWithChildren } from 'react';
import SideprojectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { ISideproject } from './ISideproject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISideproject.Payload;

export const Sideproject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SIDE PROJECT">
      <SideprojectRow payload={payload} />
    </CommonSection>
  );
}
