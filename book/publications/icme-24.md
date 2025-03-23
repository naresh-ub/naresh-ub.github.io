# Adaptive Missing-Modality Emotion Recognition in Conversations via Joint Embedding Learning

```{admonition} Project details
:class: dropdown
| Category       | Status      |
|----------------|-------------|
| MS Thesis (2024) | Accepted at ICME 2024 |
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

<!-- ```{figure} figures/acmmm-23-teaser.png
---
width: 100%
name: watermark_teaser
align: center
---
``` -->

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

Human emotion can be presented in different modes i.e., audio, video, and text. However, the contribution of each mode in exhibiting each emotion is not uniform. Furthermore, the availability of complete mode-specific details may not always be guaranteed in the test time. In this work, we propose AM^2-EmoJE, a model for Adaptive Missing-Modality Emotion Recognition in Conversation via Joint Embedding Learning model that is grounded on two-fold contributions: First, a query adaptive fusion that can automatically learn the relative importance of its mode-specific representations in a query-specific manner. By this the model aims to prioritize the mode-invariant spatial query details of the emotion patterns, while also retaining its mode-exclusive aspects within the learned multimodal query descriptor. Second the multimodal joint embedding learning module that explicitly addresses various missing modality scenarios in test-time. By this, the model learns to emphasize on the correlated patterns across modalities, which may help align the cross-attended mode-specific descriptors pairwise within a joint-embedding space and thereby compensate for missing modalities during inference. By leveraging the spatio-temporal details at the dialogue level, the proposed AM^2-EmoJE not only demonstrates superior performance compared to the best-performing state-of-the-art multimodal methods, by effectively leveraging body language in place of face expression, it also exhibits an enhanced privacy feature. By reporting around 2-5% improvement in the weighted-F1 score, the proposed multimodal joint embedding module facilitates an impressive performance gain in a variety of missing-modality query scenarios during test time.

<!-- ```yaml
@misc{devulapally2024am2emojeadaptivemissingmodalityemotion,
      title={AM^2-EmoJE: Adaptive Missing-Modality Emotion Recognition in Conversation via Joint Embedding Learning}, 
      author={Naresh Kumar Devulapally and Sidharth Anand and Sreyasee Das Bhattacharjee and Junsong Yuan},
      year={2024},
      eprint={2402.10921},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2402.10921}, 
}
``` -->