module Pages
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
      assets_dir = site.config["pages_dir"] || "./_pages"
      raw_assets = Dir["#{assets_dir}/**/*"]
      raw_assets.each do |asset|
        if File.file? asset
          asset_name = asset.match(/[^\/]*$/)[0]
          asset_path = asset.match(/(.*\/)[^\/]*$/)[1]
          source_dir = asset_path.gsub(/^\.\//, "")
          asset_path = asset_path.gsub(/^#{assets_dir}/, "")

          content = File.read(asset, :encoding => "ISO-8859-1")
          if content =~ /\A(---\s*\n.*?\n?)^((---|\.\.\.)\s*$\n?)/m
            site.pages << Page.new(site, site.source, asset_path, asset_name, source_dir)
          else
            site.static_files << StaticFile.new(site, site.source, source_dir, asset_name, asset_path)
          end
        end
      end
    end
  end

  class Page < Jekyll::Page
    def initialize(site, base, dir, name, source_dir)
      @site = site
      @base = base
      @dir  = dir
      @name = name

      self.process(name)

      self.read_yaml(File.join(base, source_dir), name);
    end
  end

  class StaticFile < Jekyll::StaticFile
    def initialize(site, base, dir, name, target)
      @site = site
      @base = base
      @dir  = dir
      @name = name
      @target = target
    end

    def destination(dest)
      File.join(*[dest, @target, @name].compact)
    end
  end
end
