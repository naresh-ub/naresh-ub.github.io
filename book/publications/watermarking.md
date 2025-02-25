# Your Text Encoder Can Be An Object-Level Watermarking Controller

<head>
  <style>
    .author-container {
      text-align: center;
      /* font-family: "Times New Roman", Times, serif; */
      /* background: white; */
      padding: 15px;
      width: fit-content;
      margin: 20px auto;
      /* border: 2px solid black; */
      /* border-radius: 8px; */
      /* box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); */
    }
    .author-names {
      font-size: 20px;
      font-weight: bold;
    }
    .author-names sup {
      font-size: 14px;
    }
    .affiliations {
      font-size: 18px;
      margin-top: 5px;
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
    Vishnu Suresh Lokhande<sup>1</sup> &nbsp;
    Mingzhen Huang<sup>1</sup> &nbsp;
    <br>
    Shruti Agarwal<sup>2</sup> &nbsp;
    Vishal Asnani<sup>2</sup> &nbsp;
    Siwei Lyu<sup>1</sup>
</div>

<!-- Affiliations -->
<div class="affiliations">
    <sup>1</sup>University at Buffalo, SUNY &nbsp;&nbsp;
    <sup>2</sup>Adobe Research
</div>

<!-- Emails -->
<div class="emails">
    {devulapa, vishnulo, mhuang33, siweilyu}@buffalo.edu &nbsp;&nbsp;
    {shragarw, vasnani}@adobe.com
</div>
</div>

```{figure} figures/watermarking_fig1.png
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
    <a href="https://arxiv.org/" target="_blank" style="color: #B31B1B;">
    <i class="fa-solid fa-file-pdf"></i>  ArXiv
    </a>
    <a href="https://github.com/" target="_blank" style="color: green;">
    <i class="fa-brands fa-github"></i>  Code
    </a>
    <a href="https://slides.com/" target="_blank" style="color: #F48024;">
    <i class="fa-solid fa-file-powerpoint"></i>  Slides
    </a>
</div>

## Abstract

Invisible watermarking of AI-generated images can help with copyright protection, enabling detection and identification of AI-generated media. In this work, we present a novel approach to watermark images of text-to-image Latent Diffusion Models (LDMs). By only fine-tuning text token embeddings $\mathcal{W}_*$, we enable watermarking in selected objects or parts of the image, offering greater flexibility compared to traditional whole-image watermarking. This method also leverages the text encoder’s compatibility across various LDMs, allowing plug-and-play integration for different LDM versions. Moreover, introducing the watermark early in the encoding stage improves robustness to adversarial perturbations in later stages of the pipeline. Our approach achieves $99\%$ bit accuracy with a $10^5 \times$ reduction in model parameters, enabling efficient watermarking with a throughput of $48$ bits.

```yaml
@misc{devulapallywatermarking,
      title={Your Text Encoder Can Be An Object-Level Watermarking Controller}, 
      author={Naresh Kumar Devulapally and Vishnu Suresh Lokhande and Mingzhen Huang and Shruti Agarwal and Vishal Asnani and Siwei Lyu},
      year={2025},
      url={https://naresh-ub.github.io/publications/watermarking}, 
}
```