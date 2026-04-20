from manim import *
from manim_slides import Slide


class DDPMELBOOneScene(Slide):
    skip_reversing = False

    def construct(self):
        self.camera.background_color = BLACK

        title = Tex(r"\textbf{DDPM ELBO Derivation}", color=WHITE).scale(0.9)
        title.to_edge(UP, buff=0.35)

        eq = MathTex(
            r"\log p_\theta(x_0)\geq",
            r"\mathbb{E}_{q(x_{1:T}\mid x_0)}",
            r"\left[",
            r"\log p_\theta(x_{0:T})",
            r"-",
            r"\log q(x_{1:T}\mid x_0)",
            r"\right]",
            color=WHITE,
        ).scale(0.72)

        self.play(FadeIn(title), run_time=0.6)
        self.play(Write(eq), run_time=1.5)
        self.next_slide()

        self.play(
            eq.animate.to_corner(UL, buff=0.6),
            run_time=1.0,
        )
        self.next_slide()

        self.wait(1)