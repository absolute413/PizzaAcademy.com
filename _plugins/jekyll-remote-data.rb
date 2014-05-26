require "open-uri"
require "json"
require "yaml"

module RemoteData
  class Generator < Jekyll::Generator
    def generate(site)
      remote_data = site.config["remote_data"] || {}
      remote_data.each do |data, remote|
        open(remote) {|f|
          if f.content_type == "application/json"
            parsed = JSON.parse(f.read)
          else
            parsed = YAML.load(f.read)
          end

          site.data[data] = parsed
          puts "site.data.#{data}".ljust(30) + " = #{remote}"
        }
      end
    end
  end
end
