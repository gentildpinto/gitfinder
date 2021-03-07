class User
  attr_reader :username,
    :avatar_url,
    :bio,
    :company,
    :blog,
    :html_url,
    :location,
    :twitter_username

  def initialize(username)
    response = Services::Github.request(username)

    @bio = response["bio"]
    @blog = response["blog"]
    @username = response["login"]
    @company = response["company"]
    @location = response["location"]
    @html_url = response["html_url"]
    @avatar_url = response["avatar_url"]
    @twitter_username = response["twitter_username"]
  end
end