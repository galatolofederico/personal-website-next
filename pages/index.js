import { Loader } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { Accordion, Grid } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';

const papers = [
    {
      name: "pub1",
      title: "Generating images from caption and vice versa via CLIP-Guided Generative Latent Space Search",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino, Gigliola Vaglini",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2.",
      type: "conference",
      link: "#",
      code: "#",
      data: "#",
    },
    {
      name: "pub2",
      title: "A short title, maybe too short for a real paper",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2.",
      type: "journal",
      link: "#",
      code: "#",
    },
    {
      name: "pub3",
      title: "A very very very long title, sometimes paper titles can be way too longer than necessary. With a Lot of Amazing Acronyms (WLAA) but this is academia and there is nothing we can do about it",
      authors: "Federico A. Galatolo, Mario G. C. A. Cimino, Gigliola Vaglini",
      abstract: "In this research work we present CLIP-GLaSS, a novel zero-shot framework to generate an image (or a caption) corresponding to a given caption (or image). CLIP-GLaSS is based on the CLIP neural network, which, given an image and a descriptive caption, provides similar embeddings. Differently, CLIP-GLaSS takes a caption (or an image) as an input, and generates the image (or the caption) whose CLIP embedding is the most similar to the input one. This optimal image (or caption) is produced via a generative network, after an exploration by a genetic algorithm. Promising results are shown, based on the experimentation of the image Generators BigGAN and StyleGAN2, and of the text Generator GPT2.",
      type: "journal",
      link: "#",
      data: "#",
    },
]



export default function Home() {
  return <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}><PaperAccordion papers={papers} /></Grid.Col>
  </Grid>
</>
}