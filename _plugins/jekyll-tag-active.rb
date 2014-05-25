module TagActive
  class Tag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup #"{{"+ markup +"}}"
    end

    def render(context)
      page_url = context.registers[:page]["url"]
      node_url = @markup #Liquid::Template.parse(@markup).render(context)
      page_url = page_url.strip
      node_url = node_url.strip

      #print page_url + " == " + node_url + " >> " + (  (page_url == node_url) or (node_url != "/" and page_url.start_with?(node_url))  ).to_s + "\n"
      if ((page_url == node_url) or (node_url != "/" and page_url.start_with?(node_url)))
        "active"
      end
    end
  end
end

Liquid::Template.register_tag("active", TagActive::Tag)
