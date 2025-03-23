# AMuSE: Adaptive Multimodal Analysis for Speaker Emotion Recognition in Group Conversations

```{admonition} Project details
:class: dropdown
| Category       | Status      |
|----------------|-------------|
| MS Thesis (2023) | Published at Big MM 2023 |
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

```{figure} figures/bigmm-23-teaser.png
---
width: 70%
name: bigmm_teaser
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
    <a href="https://ieeexplore.ieee.org/abstract/document/10411802" class="button">Paper</a>&nbsp;
    <a href="https://github.com/neuralnaresh/multimodal-emotion-recognition" class="button">Code</a>&nbsp;
    <!-- <a href="#" class="button">Slides</a>&nbsp; -->
</div>

## Abstract

Analyzing individual emotions during group conversation is crucial in developing intelligent agents capable of natural human-machine interaction. While reliable emotion recognition techniques depend on different modalities (text, audio, video), the inherent heterogeneity between these modalities and the dynamic cross-modal interactions influenced by an individual’s unique behavioral patterns make the task of emotion recognition very challenging. This difficulty is compounded in group settings, where the emotion and its temporal evolution are not only influenced by the individual but also by external contexts like audience reaction and context of the ongoing conversation. To meet this challenge, we propose a Multimodal Attention Network (MAN) that captures cross-modal interactions at various levels of spatial abstraction by jointly learning its interactive bunch of mode-specific Peripheral and Central networks. The proposed MAN "injects" cross-modal attention via its Peripheral keyvalue pairs within each layer of a mode-specific Central query network. The resulting cross-attended mode-specific descriptors are then combined using an Adaptive Fusion (AF) technique that enables the model to integrate the discriminative and complementary mode-specific data patterns within an instance-specific multimodal descriptor. Given a dialogue represented by a sequence of utterances, the proposed AMuSE (Adaptive Multimodal Analysis for Speaker Emotion) model condenses both spatial (within-mode and within-utterance) and temporal (across-mode and across-utterances in the sequence) features into two dense descriptors: speaker-level and utterance-level. This helps not only in delivering better classification performance (3−5% improvement in Weighted-F1 and 5−7% improvement in Accuracy) in large-scale public datasets (MELD and IEMOCAP) but also helps the users in understanding the reasoning behind each emotion prediction made by the model via its Multimodal Explainability Visualization module.

```yaml
@INPROCEEDINGS{10411802,
  author={Anand, Sidharth and Devulapally, Naresh Kumar and Das Bhattacharjee, Sreyasee and Yuan, Junsong and Chang, Yu-Ping},
  booktitle={2023 IEEE Ninth Multimedia Big Data (BigMM)}, 
  title={AMuSE: Adaptive Multimodal Analysis for Speaker Emotion Recognition in Group Conversations}, 
  year={2023},
  volume={},
  number={},
  pages={40-47},
  keywords={Emotion recognition;Adaptation models;Predictive models;Cognition;Sensors;Reliability;Task analysis;Emotion Recognition;Multimodal Sensing;Supervised Learning},
  doi={10.1109/BigMM59094.2023.00013}}
```