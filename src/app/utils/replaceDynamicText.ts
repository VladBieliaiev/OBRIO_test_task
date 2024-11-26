import { RootState } from '@/app/redux/store';

export const replaceDynamicText = (
  text: string,
  dynamicKeys: string[],
  state: RootState
): string => {
  const resolvedValues: Record<string, string> = {};

  const answers = state.questionnaire?.answers || [];

  dynamicKeys.forEach((key) => {
    const answer = answers.find((a) => a.identifier === key);

    if (key === 'childrenStatus') {
      const parentAnswer = answers.find(
        (a) => a.identifier === 'singleParent' || a.identifier === 'parent'
      );
      resolvedValues[key] =
        parentAnswer?.answer === 'Yes' ? 'who have children' : '';
    } else {
      resolvedValues[key] = answer?.answer?.toString() || `{${key}}`;
    }
  });

  let resolvedText = text;
  for (const [key, value] of Object.entries(resolvedValues)) {
    resolvedText = resolvedText.replace(`{${key}}`, value);
  }

  console.log('Resolved Text:', resolvedText);

  return resolvedText;
};
