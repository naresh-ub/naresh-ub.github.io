# Multi-label Emotion Analysis in Conversation via Multimodal Knowledge Distillation

```{admonition} Project details
:class: dropdown
| Category       | Status      |
|----------------|-------------|
| MS Thesis (2023) | Published at ACM MM 2023 |
```

<head>
  <style>
    .author-container {
      text-align: center;
      /* font-family: "Times New Roman", Times, serif; */
      /* background: white; */
      /* padding: 15px; */
      width: fit-content;
      margin: 20px auto;
      /* border: 2px solid black; */
      /* border-radius: 8px; */
      /* box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); */
    }
    .author-names {
      font-size: 20px;
      /* font-weight: bold; */
    }
    .author-names sup {
      font-size: 14px;
    }
    .affiliations {
      font-size: 18px;
      margin-top: 5px;
      font-weight: bold;
    }
    .emails {
      font-size: 16px;
      margin-top: 5px;
    }
  </style>
</head>

<div class="author-container">
<!-- Author Names -->
<div class="author-names">
    Naresh Kumar Devulapally<sup>1</sup> &nbsp;
    Sidharth Anand<sup>2</sup> &nbsp;
    Sreyasee Das Bhattacharjee<sup>1</sup> &nbsp;
    <br>
    Junsong Yuan<sup>1</sup> &nbsp;
</div>

<!-- Affiliations -->
<div class="affiliations">
    <sup>1</sup>University at Buffalo, SUNY &nbsp;&nbsp;
    <sup>2</sup>BITS Pilani, Hyderabad
</div>

<!-- Emails -->
<div class="emails">
    {devulapa, sreyasee, jsyuan}@buffalo.edu &nbsp;&nbsp;
    {f20191203}@hyderabad.bits-pilani.ac.in
</div>
</div>

```{figure} figures/acmmm-23-teaser.png
---
width: 100%
name: watermark_teaser
align: center
---
```

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <style>
    .content {
      text-align: center;
    }
    .social-icons {
      text-align: center;
      margin-top: 10px;
    }
    .social-icons a {
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
      color: inherit;
      display: inline-block;
    }
    .social-icons i {
      margin-right: 6px;
    }
  </style>
</head>

<div class="social-icons">
    <a href="https://dl.acm.org/doi/10.1145/3581783.3612517" class="button">Paper</a>&nbsp;
    <a href="https://github.com/neuralnaresh/multimodal-emotion-recognition" class="button">Code</a>&nbsp;
    <!-- <a href="#" class="button">Slides</a>&nbsp; -->
</div>

## Abstract

Evaluating speaker emotion in conversations is crucial for various applications requiring human-computer interaction. However, co-occurrences of multiple emotional states (e.g. ‘anger’ and ‘frustration’ may occur together or one may influence the occurrence of the other) and their dynamic evolution may vary dramatically due to the speaker’s internal (e.g., influence of their personalized socio-cultural-educational and demographic backgrounds) and external contexts. Thus far, the previous focus has been on evaluating only the dominant emotion observed in a speaker at a given time, which is susceptible to producing misleading classification decisions for difficult multi-labels during testing. In this work, we present Self-supervised Multi-Label Peer Collaborative Distillation (SeMuLPCD) Learning via an efficient Multimodal Transformer Network, in which complementary feedback from multiple mode-specific peer networks (e.g.transcript, audio, visual) are distilled into a single mode-ensembled fusion network for estimating multiple emotions simultaneously. The proposed Multimodal Distillation Loss calibrates the fusion network by minimizing the Kullback–Leibler divergence with the peer networks. Additionally, each peer network is conditioned using a self-supervised contrastive objective to improve the generalization across diverse socio-demographic speaker backgrounds. By enabling peer collaborative learning that allows each network to independently learn their mode-specific discriminative patterns, SeMUL-PCD is effective across different conversation environments. In particular, the model not only outperforms the current state-of-the-art models on several large-scale public datasets (e.g., MOSEI, EmoReact and ElderReact), but with around 17% improved weighted F1-score in the cross-dataset experimental settings. The model also demonstrates an impressive generalization ability across age and demography-diverse populations.

```yaml
@inproceedings{10.1145/3581783.3612517,
author = {Anand, Sidharth and Devulapally, Naresh Kumar and Bhattacharjee, Sreyasee Das and Yuan, Junsong},
title = {Multi-label Emotion Analysis in Conversation via Multimodal Knowledge Distillation},
year = {2023},
isbn = {9798400701085},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
doi = {10.1145/3581783.3612517},
booktitle = {Proceedings of the 31st ACM International Conference on Multimedia},
pages = {6090–6100},
numpages = {11},
keywords = {collaborative learning, emotion analysis, knowledge distillation, multi-label classification, transformer},
location = {Ottawa ON, Canada},
series = {MM '23}
}
```