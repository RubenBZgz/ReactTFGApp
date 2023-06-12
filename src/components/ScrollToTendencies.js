function ScrollToTendencies() {
  const handleClickScroll = () => {
    const element = document.getElementsByClassName("tendencies");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
}
