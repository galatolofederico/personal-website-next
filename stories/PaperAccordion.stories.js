import { Accordion } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';

const papers = [
    {
      name: "galatologlass1",
      title: "Generating images from caption and vice versa via CLIP-Guided Generative Latent Space Search",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino, Gigliola Vaglini",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2."
    },
    {
      name: "galatologlass2",
      title: "Generating images from caption and vice versa via CLIP-Guided Generative Latent Space Search",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino, Gigliola Vaglini",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2."
    },
    {
      name: "galatologlass3",
      title: "Generating images from caption and vice versa via CLIP-Guided Generative Latent Space Search",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino, Gigliola Vaglini",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2."
    },
]


export default {
  title: 'Components/PaperAccordion',
  component: PaperAccordion,
};

export const Default = () => <>
  <PaperAccordion papers={papers} />
</>